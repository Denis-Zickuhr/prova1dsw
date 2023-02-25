package JPA;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.Optional;

@RestController
public class CarroResource {
	
	CarroRepository carroRepository;
	
	public CarroResource(CarroRepository carroRepository) {
		this.carroRepository = carroRepository;
	}
	
	
	@GetMapping(path="/carros")
	public List<Carro> listarCarros() {
		return carroRepository.findAll();
	}
	
	@GetMapping(path="/carros/{id}")
	public Carro lerCarro(@PathVariable Long id) {
		Optional<Carro> carro = carroRepository.findById(id);
		return carro.orElse(null);
	}
	
	
	
}
